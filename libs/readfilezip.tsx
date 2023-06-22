import JSZip from 'jszip';
import * as shpjs from 'shpjs';
import * as XLSX from 'xlsx';


export const readFileChangeZip = (file: any) => {
    let features = JSZip.loadAsync(file)
        .then(zip => {
            // Read .shp file contents
            let shpData = zip.file(/.shp$/i)[0].async('uint8array').then(shpData => {
                return shpData;
            });

            // Read .shx file contents
            let shxData = zip.file(/.shx$/i)[0].async('uint8array').then(shxData => {
                return shxData;
            });

            // Read .dbf file contents
            let dbfData = zip.file(/.dbf$/i)[0].async('arraybuffer').then(dbfData => {
                return dbfData;
            });

            // Wait for all files to be read
            let data = Promise.all([shpData, shxData, dbfData]).then(data => {
                return data;
            });

            return data;

        })
        .then((results) => {
            const shapefileData = results[0];
            const shapefileIndex = results[1];
            const shapefileAttributes = results[2];

            // Parse the shapefile contents
            let parsedData = shpjs.combine([shpjs.parseShp(shapefileData, /*optional prj str*/), shpjs.parseDbf(shapefileAttributes, shapefileIndex)]);
            return parsedData.features;
        })
        .catch(error => {
            console.error(error);
        });
    return features;
}

export const readFileChangeXlsx = (file: any) => {
    const reader = new FileReader();

    let data = new Promise((resolve, reject) => {
        reader.onload = (e: any) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Extract data from the first sheet (assuming it's named Sheet1)
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];

            // Convert sheet data to JSON object
            const jsonData = XLSX.utils.sheet_to_json(sheet);

            // Resolve the jsonData object
            resolve(jsonData);
        };

        reader.onerror = (error) => {
            // Reject with the error object
            reject(error);
        };

        reader.readAsArrayBuffer(file);
    });
    return data;
}

export const readFileChangeTxT = (file: any) => {
    const reader = new FileReader();

    let data = new Promise((resolve, reject) => {
        reader.onload = (e: any) => {
            const contents = e.target.result;

            const lines = contents.split('\r\n');
            const headers = lines[0].split(',');
            console.log('headers', headers);
            const resultheaders = headers[0].split('|');
            console.log('headers', resultheaders);
            const sprites = lines.slice(1).map((line: any) => {
                const values = line.split('|');
                const sprite: any = {};
                for (let i = 0; i < resultheaders.length; i++) {
                    sprite[resultheaders[i]] = values[i];
                }
                return sprite;
            });        
            resolve(sprites);
        };

        reader.onerror = (error) => {
            console.error('Error reading file:', error);
            reject(error);
        };

        reader.readAsText(file);
    });
    return data;
}

export const readDataAll = async (file: any) => {
    let typefile = file.name.split('.').pop();

    if (typefile == 'zip') {
        let features = await readFileChangeZip(file)
        // console.log("features", features);
        return features;
    }
    if (typefile == 'xlsx') {
        let features = await readFileChangeXlsx(file)
        console.log("features", features);
        return features;
    }
    if (typefile == 'txt') {
        let features = await readFileChangeTxT(file)
        console.log("features", features);
        return features;
    }
}

export const setGeometrys = (data: any) => {
    let dataOjb: any = data;
    if (dataOjb != null) {
        let coordinatesStr = '';
        for (let i = 0; i < dataOjb.coordinates.length; i++) {
            let strMulti = '';
            let dataCoordinates = dataOjb.coordinates[i];
            for (let j = 0; j < dataCoordinates.length; j++) {
                let str = '';
                let dataCoordinates2 = dataCoordinates[j];
                for (let k = 0; k < dataCoordinates2.length; k++) {
                    let dataCoordinates3 = dataCoordinates2[k];
                    str += ' ' + dataCoordinates3;
                }
                strMulti += ',' + str;
            }
            coordinatesStr = "MULTIPOLYGON(((" + strMulti.substring(2) + ")))";
        }
        console.log(coordinatesStr, 'coordinatesStr');
        return coordinatesStr;
    }
}


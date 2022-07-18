import FileInfo from './FileInfo.js';
import path from 'path'

// BEGIN (write your solution here)
class SmartFileInfo extends FileInfo {
    getSize(arg = 'b') {
        const size = super.getSize();
        switch (arg) {
            case ('b'):
                return size;
            case ('kb'):
                return size / 1024;
            default:
                throw `Error ${arg} doesn't provide correct`
        }
    }
};

// END
export default SmartFileInfo;


const file = new SmartFileInfo(path.resolve('HTMLElement.js'));
console.log(file.getSize())
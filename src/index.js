/**
 * Entry point of logger package
 * Exports method for loggers creation
 */

import Logger from './logger';
import Replacer from './replacer';
import ConsoleWriter from './console/writer';
import ConsoleFormatter from './console/formatter';
import WebFileFormatter from './web-file/formatter';
import WebFileWriter from './web-file/writer';
import WebFile from './web-file/file';

export {
    Logger as default,
    Replacer,
    ConsoleWriter,
    ConsoleFormatter,
    WebFileWriter,
    WebFileFormatter,
    WebFile
};

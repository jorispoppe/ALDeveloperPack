export interface SettingsObject {
    [index: string]: string;
}

export const extractAsKeyValue = (object: SettingsObject) => ({
    key: Object.keys(object)[0],
    value: Object.values(object)[0],
});
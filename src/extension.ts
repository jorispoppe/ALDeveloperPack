import * as vscode from "vscode";
import { extractAsKeyValue, SettingsObject } from "./helpers";
import { defaultSettings } from "./defaultSettings";

const updateUserSettings = async (settings: SettingsObject[]) => {
	settings.forEach(async setting => {
		const { key, value } = extractAsKeyValue(setting);
		await vscode.workspace
			.getConfiguration()
			.update(key, value, vscode.ConfigurationTarget.Global);
	});
};

export async function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		"al-developer-pack.setConfiguration",
		async () => {
			await updateUserSettings(defaultSettings);
			await vscode.window.showInformationMessage("AL Developer Pack configuration has been set.");
		}
	);
	context.subscriptions.push(disposable);
}


export function deactivate() { }
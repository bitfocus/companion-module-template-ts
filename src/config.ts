import { Regex, type SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
	host: string
	port: number
}

const defaultConfig: ModuleConfig = {
	host: '',
	port: 8000,
}

export function updateConfig(config: ModuleConfig): boolean {
	let updated = false
	for (const key in defaultConfig) {
		if (!(key in config)) {
			// a bit of contortion to get past TypeScript errors: "expression of type 'string' can't be used to index type 'ModuleConfig'."
			const obj = { [key]: defaultConfig[key as keyof ModuleConfig] }
			Object.assign(config, obj)
			updated = true
		}
	}
	return updated
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'textinput',
			id: 'host',
			label: 'Target IP',
			width: 8,
			regex: Regex.IP,
		},
		{
			type: 'number',
			id: 'port',
			label: 'Target Port',
			width: 4,
			min: 1,
			max: 65535,
			default: defaultConfig.port,
		},
	]
}

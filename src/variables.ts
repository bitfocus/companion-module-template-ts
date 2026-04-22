import type ModuleInstance from './main.js'

export type VariablesSchema = {
	variable1: string
	variable2: string
	variable3: string
}

export function UpdateVariableDefinitions(self: ModuleInstance): void {
	self.setVariableDefinitions({
		variable1: { name: 'My first variable' },
		variable2: { name: 'My second variable' },
		variable3: { name: 'Another variable' },
	})
}

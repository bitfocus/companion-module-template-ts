import type { ModuleInstance } from './main.js'
import { CompanionPresetDefinitions, combineRgb } from '@companion-module/base'

export function UpdatePresets(self: ModuleInstance): void {
	const presets: CompanionPresetDefinitions = {}
	presets['mylabel'] = {
		type: 'button',
		category: 'Group One',
		name: 'Name',
		style: {
			text: 'My first Preset button',
			size: 'auto',
			color: combineRgb(255, 255, 255),
			bgcolor: combineRgb(0, 0, 0),
			show_topbar: false,
		},
		steps: [],
		feedbacks: [],
	}

	self.setPresetDefinitions(presets)
}

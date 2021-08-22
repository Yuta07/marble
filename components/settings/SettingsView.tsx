import { DangerZone } from './DangerZone'
import { PasswordSettings } from './PasswordSettings'
import { UsernameSettings } from './UsernameSettings'
import { Text } from '@components/ui/Text'

export const SettingsView = () => {
	return (
		<div className="w-full">
			<Text variant="h1">Settings</Text>
			<div className="mt-5">
				<Text variant="h2" className="text-gray-darken">
					Username
				</Text>
				<UsernameSettings />
			</div>
			<div className="mt-5">
				<Text variant="h2" className="text-gray-darken">
					Password
				</Text>
				<PasswordSettings />
			</div>
			<div className="mt-10">
				<Text variant="h2" className="pt-5 border-solid border-t text-error border-gray drop-shadow">
					Danger Zone
				</Text>
				<div className="mt-4 p-4 border-solid border border-gray rounded drop-shadow">
					<DangerZone />
				</div>
			</div>
		</div>
	)
}

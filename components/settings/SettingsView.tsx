import { DangerZone } from './DangerZone'
import { PasswordSettings } from './PasswordSettings'
import { UsernameSettings } from './UsernameSettings'
import { Text } from '@components/ui/Text'

export const SettingsView = () => {
	return (
		<div className="py-10 w-full">
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
				<Text variant="h2" className="pt-5 text-error border-t border-gray border-solid drop-shadow">
					Danger Zone
				</Text>
				<div className="p-4 mt-4 rounded border border-gray border-solid drop-shadow">
					<DangerZone />
				</div>
			</div>
		</div>
	)
}

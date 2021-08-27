import { Button } from '@components/ui/Button'
import { Text } from '@components/ui/Text'

export const DangerZone = () => {
	const handleDeleteAccount = () => {}

	return (
		<>
			<Text variant="p">Do you want to delete your account?</Text>
			<Button className="mt-4 ml-auto block bg-error" onClick={handleDeleteAccount}>
				Delete Account
			</Button>
		</>
	)
}

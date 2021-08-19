import { Button } from '@components/ui/atoms/Button'

export const Cta = () => {
	return (
		<div className="mx-auto my-12">
			<img src="/bear-outline.svg" className="w-60 h-60 mx-auto" />
			<h1 className="text-2xl text-center">Welocome to socket chat trial place</h1>
			<div className="w-full mt-8 flex justify-around">
				<Button className="px-5 py-2 text-l">Signup</Button>
				<Button className="px-5 py-2 text-l">Login</Button>
			</div>
		</div>
	)
}

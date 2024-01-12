export default {
	rcs_options: [{"label":"AVANZAR","value":"AVANZAR"},{"label":"CANCEL AVANZAR","value":"CANCEL AVANZAR"}],
	myVar2: {},
	async sendRCS () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		const rfs = "3"
		const node="4"
		SendRCS_mock.run({rfs,node})
	}
}
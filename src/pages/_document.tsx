import Document,{Html,Head,Main,NextScript} from 'next/document';
// https://nextjs.org/docs/advanced-features/custom-document
export default class MyDocument extends Document{
	render(){
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
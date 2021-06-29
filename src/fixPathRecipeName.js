export const fixPath = (urlIn) => {
	let urlOut = urlIn.toLowerCase();
	urlOut = urlOut.replace(/[`~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
	urlOut = urlOut.replace(" ", "_");

	return urlOut
}
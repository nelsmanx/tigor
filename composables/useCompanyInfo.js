export const useCompanyInfo = () => {
	const tel = '+7 (800) 000-00-00';
	const tel2 = '+7 (495) 120-05-29';
	const mail = 'info@tigor.pro';

	const formatTel = (tel) => {
		return tel.replace(/(?!^\+)[^0-9]/g, "");
	};

	return {
		tel,
		tel2,
		mail,
		formatTel
	};
};
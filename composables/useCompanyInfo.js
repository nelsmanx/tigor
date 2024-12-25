export const useCompanyInfo = () => {
  const tel = '+7 (000) 000-00-00';
  const tel2 = '+7 (000) 000-00-00';
  const mail = 'info@tigor.pro';

  const formatTel = (tel) => {
    return tel.replace(/[^0-9]/g, "");
  };

  return {
    tel,
    tel2,
    mail,
    formatTel
  };
};
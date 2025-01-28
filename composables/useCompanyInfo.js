export const useCompanyInfo = () => {
  const tel = '+ 7 (800) 775-64-17';
  const tel2 = '+ 7 (800) 775-64-17';
  const mail = 'tigor_partner@tigor.pro';

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
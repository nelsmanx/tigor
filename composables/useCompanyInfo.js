export const useCompanyInfo = () => {
  const tel = '+ 7 (800) 775-64-17';
  const tel2 = '+ 7 (930) 036-39-25';
  const mail = 'tigor_partner@tigor.pro';
  const telegram = 'https://t.me/TigorNews';

  const formatTel = (tel) => {
    return tel.replace(/[^0-9]/g, "");
  };

  return {
    tel,
    tel2,
    mail,
    telegram,
    formatTel
  };
};
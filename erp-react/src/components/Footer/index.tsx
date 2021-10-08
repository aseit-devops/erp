import { DefaultFooter } from '@ant-design/pro-layout';
export default () => {
  const defaultMessage = '运维服务中心';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[]}
    />
  );
};

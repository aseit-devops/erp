import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const defaultMessage = '炜呈智能电力科技（杭州）有限公司';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[]}
    />
  );
};

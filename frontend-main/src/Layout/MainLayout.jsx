import useAuthCheck from '../hooks/useCheckAuth';

const MainLayout = ({children}) => {
const checkAuth = useAuthCheck()
//   console.log({checkAuth});
  if (!checkAuth) {
      return <div>loading...</div>
  }
    return (
        <div>
            {children}
        </div>
    );
};

export default MainLayout;
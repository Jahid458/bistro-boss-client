import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import UseAxiosSecure from './UseAxiosSecure';

const useAdmin = () => {
    const {user, loading} = useAuth();
    const axiosSecure = UseAxiosSecure();
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
<<<<<<< HEAD
        enabled:!loading,
        queryFn: async() =>{
=======
        enabled: !loading,
        queryFn: async() =>{
            console.log('Asking or checking is Admin', user);
>>>>>>> 3f4b9240728b220fd1f3482ef42d082e0cf1aa25
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(res.data);
            return res.data?.admin
        }
    })
    return [isAdmin,isAdminLoading]
};

export default useAdmin;
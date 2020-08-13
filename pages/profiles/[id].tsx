import Link from 'next/link';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_PERSON_QUERY } from '../../src/graphql';
import { IPerson } from '../../src/interfaces';
import Profile from '../../src/components/Profile';

type PersonVars = {
  id: string;
};

type IPersonResponse = {
  Person?: IPerson;
};

const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading, error } = useQuery<IPersonResponse, PersonVars>(
    GET_PERSON_QUERY,
    {
      variables: { id: id as string },
    },
  );

  return (
    <div className="container mx-auto p-12">
      {!loading && (
        <Link href="/">
          <button className="bg-white hover:bg-gray-100 text-ravn-black font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Return to home page
          </button>
        </Link>
      )}
      {loading && (
        <p className="text-2xl leading-8 text-center text-light font-bold">
          Loading ...
        </p>
      )}
      {!loading && (error || !data.Person) && (
        <p className="text-2xl leading-8 text-center text-emphasis font-bold">
          Failed to Load Data
        </p>
      )}
      {!loading && !error && (
        <Profile className="w-full" person={data.Person} />
      )}
    </div>
  );
};

export default ProfilePage;

import { useQuery } from '@apollo/client';
import PeopleList from '../src/components/PeopleList';
import { IPerson } from '../src/interfaces';
import { useEffect, useState } from 'react';
import Profile from '../src/components/Profile';
import { ALL_PEOPLE_QUERY } from '../src/graphql';
import { useWindowSize } from '../src/hooks';
import { BREAKPOINTS } from '../src/utils';
import { useRouter } from 'next/router';

interface IPeopleList {
  allPersons: IPerson[];
}

const Home = () => {
  const router = useRouter();
  const { width } = useWindowSize();
  const [people, setPeople] = useState({});
  const [currentPerson, setPerson] = useState<IPerson | null>(null);
  const { data, loading, error } = useQuery<IPeopleList>(ALL_PEOPLE_QUERY);

  useEffect(() => {
    if (data?.allPersons?.length) {
      setPeople(
        data.allPersons.reduce((prev, nxt) => ({ ...prev, [nxt.id]: nxt }), {}),
      );
    }
  }, [data]);

  return (
    <div className="flex items-stretch h-full flex-wrap overflow-hidden">
      <div className="xl:w-1/5 lg:w-2/5 w-full border-r-2 border-light h-full overflow-y-auto text-left">
        <PeopleList
          data={data?.allPersons ?? []}
          isLoading={loading}
          error={!!error}
          onSelect={(id: string) => {
            setPerson(people[id]);

            if (width < BREAKPOINTS.lg) {
              router.push('/profiles/[id]', `/profiles/${id}`);
            }
          }}
        />
      </div>
      <div className="xl:w-4/5 lg:w-3/5 lg:block hidden ">
        <div className="grid grid-cols-5">
          <div className="col-start-2 col-span-3">
            <Profile className="w-full mt-12" person={currentPerson} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

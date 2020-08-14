import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PeopleList from '../src/components/PeopleList';
import { PersonType } from '../src/types';
import Profile from '../src/components/Profile';
import { ALL_PEOPLE_QUERY } from '../src/graphql';
import { useWindowSize } from '../src/hooks';
import { BREAKPOINTS } from '../src/utils';

type PeopleListType = {
  allPersons: PersonType[];
};

type PeopleVars = {
  first?: number;
  skip?: number;
};

const Home = () => {
  const router = useRouter();
  const { width } = useWindowSize();
  const [people, setPeople] = useState({});
  const [hasMore, setHasMore] = useState(true);
  const [currentPerson, setPerson] = useState<PersonType | null>(null);
  const { data: { allPersons } = {}, loading, error, fetchMore } = useQuery<
    PeopleListType,
    PeopleVars
  >(ALL_PEOPLE_QUERY, {
    variables: { first: 5 },
    fetchPolicy: 'cache-and-network',
  });

  useEffect(() => {
    if (allPersons?.length) {
      setPeople(
        allPersons.reduce((prev, nxt) => ({ ...prev, [nxt.id]: nxt }), {}),
      );
    }
  }, [allPersons?.length]);

  const fetchMoreData = () => {
    if (allPersons?.length) {
      fetchMore({
        variables: {
          skip: allPersons.length,
          first: 5,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult?.allPersons?.length) {
            setHasMore(false);
            return prev;
          }

          return {
            allPersons: [...prev.allPersons, ...fetchMoreResult.allPersons],
          };
        },
      });
    }
  };

  return (
    <div className="flex items-stretch h-full flex-wrap overflow-hidden">
      <div className="xl:w-1/5 lg:w-2/5 w-full border-r-2 border-light h-full overflow-y-auto text-left">
        <PeopleList
          data={allPersons ?? []}
          isLoading={loading}
          error={!!error}
          onSelect={(id: string) => {
            setPerson(people[id]);

            if (width < BREAKPOINTS.lg) {
              router.push('/profiles/[id]', `/profiles/${id}`);
            }
          }}
          hasMore={hasMore}
          fetchMore={fetchMoreData}
          selected={currentPerson}
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

import Indicator from './Indicator';
import { PersonType } from '../types';
import InfiniteScroll from 'react-infinite-scroll-component';

type PeopleListProps = {
  isLoading?: boolean;
  error: boolean;
  data: PersonType[];
  hasMore?: boolean;
  fetchMore?: () => void;
  onSelect?: (id: string) => void;
};

const defaultProps: PeopleListProps = {
  isLoading: true,
  error: false,
  hasMore: false,
  data: [],
};

const PersonField = ({
  data,
  onClick,
}: {
  data: PersonType;
  onClick: (id: string) => void;
}) => {
  const specie = data.species[0]?.name;
  const homeworld = data.homeworld?.name;
  const description =
    specie && homeworld ? `${specie} from ${homeworld}` : 'No description';

  return (
    <li onClick={() => onClick(data.id)} className="pl-8 cursor-pointer">
      <div className="flex flex-wrap flex-row h-full items-center py-8 border-b-2 border-light">
        <div className="w-4/5 pr-8">
          <p className="text-2xl lg:text-1xl md:text-xl sm:text-lg text-dark font-bold leading-8">
            {data.name}
          </p>
          {description && (
            <p className="text-xl lg:text-lg md:text-md sm:text-sm  text-light leading-7">
              {description}
            </p>
          )}
        </div>
        <div className="w-1/5 text-left pr-12 text-1xl lg:text-xl md:text-lg sm:text-sm text-dark font-bold">
          <Indicator />
        </div>
      </div>
    </li>
  );
};

const PeopleList: React.FC<PeopleListProps> = ({
  isLoading,
  data,
  error,
  hasMore,
  fetchMore,
  onSelect,
}: PeopleListProps) => {
  return (
    <ul>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={
          <li className="p-8 text-2xl leading-8 text-light text-center font-bold">
            Loading...
          </li>
        }
      >
        {data.map((d) => (
          <PersonField key={d.id} data={d} onClick={onSelect} />
        ))}
      </InfiniteScroll>
      {!isLoading && error && (
        <li className="p-8 text-2xl leading-8 text-emphasis text-center font-bold">
          Failed to Load Data
        </li>
      )}
    </ul>
  );
};

PeopleList.defaultProps = defaultProps;

export default PeopleList;

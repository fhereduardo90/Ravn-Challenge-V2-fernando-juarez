import Indicator from '../Indicator';

type PeopleListProps = {
  isLoading?: boolean;
};

const defaultProps: PeopleListProps = {
  isLoading: true,
};

const PersonField = () => (
  <li className="pl-8">
    <div className="flex flex-wrap flex-row h-full items-center py-8 border-b-2 border-light">
      <div className="w-4/5 pr-8">
        <p className="text-2xl text-dark font-bold leading-8">Luke Skywalker</p>
        <p className="text-xl text-light leading-7">Human from Tatooine</p>
      </div>
      <div className="w-1/5 text-left pr-12 text-1xl text-dark font-bold">
        <Indicator />
      </div>
    </div>
  </li>
);

const PeopleList: React.FC<PeopleListProps> = ({
  isLoading,
}: PeopleListProps) => (
  <ul>
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    <PersonField />
    {isLoading && (
      <li className="p-8 text-2xl leading-9 text-light text-center">
        Loading ...
      </li>
    )}
  </ul>
);

PeopleList.defaultProps = defaultProps;

export default PeopleList;

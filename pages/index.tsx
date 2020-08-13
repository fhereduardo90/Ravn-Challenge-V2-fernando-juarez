import PeopleList from '../src/components/PeopleList';

export default function Home() {
  return (
    <div className="flex items-stretch h-full flex-wrap overflow-hidden">
      <div className="w-1/5 border-r-2 border-light h-full overflow-y-auto text-left">
        <PeopleList />
      </div>
      <div className="w-4/5">
        <div className="grid grid-cols-5">
          <div className="col-start-2 col-span-3">
            <div className="general-information m-12">
              <table className="table-fixed w-full">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="py-6 text-left text-dark text-2xl leading-8 font-bold"
                    >
                      General Information
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b py-6 text-left text-light text-2xl leading-8 font-bold">
                      Intro to CSS
                    </td>
                    <td className="border-b py-6 text-right text-dark text-2xl leading-8 font-bold">
                      Adam
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-6 text-left text-light text-2xl leading-8 font-bold">
                      Intro to CSS
                    </td>
                    <td className="border-b py-6 text-right text-dark text-2xl leading-8 font-bold">
                      Adam
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="vehicles m-12">
              <table className="table-fixed w-full">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="py-6 text-left text-dark text-2xl leading-8 font-bold"
                    >
                      Vehicle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b py-6 text-left text-light text-2xl leading-8 font-bold">
                      Intro to CSS
                    </td>
                    <td className="border-b py-6 text-right text-dark text-2xl leading-8 font-bold">
                      Adam
                    </td>
                  </tr>
                  <tr>
                    <td className="border-b py-6 text-left text-light text-2xl leading-8 font-bold">
                      Intro to CSS
                    </td>
                    <td className="border-b py-6 text-right text-dark text-2xl leading-8 font-bold">
                      Adam
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { IPerson } from '../interfaces';

type ProfileProps = {
  className?: string;
  person?: IPerson;
};

const Profile = ({ person, ...props }: ProfileProps) => {
  if (!person) {
    return null;
  }

  const eyeColor = person?.eyeColor?.[0] ?? 'UNKNOWN';
  const hairColor = person?.hairColor?.[0] ?? 'UNKNOWN';
  const skinColor = person?.skinColor?.[0] ?? 'UNKNOWN';
  const vehicles = person.vehicles ?? [];

  return (
    <div {...props}>
      <div className="general-information">
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
                Eye Color
              </td>
              <td className="border-b py-6 text-right text-dark text-2xl leading-8 font-bold">
                {eyeColor}
              </td>
            </tr>
            <tr>
              <td className="border-b py-6 text-left text-light text-2xl leading-8 font-bold">
                Hair Color
              </td>
              <td className="border-b py-6 text-right text-dark text-2xl leading-8 font-bold">
                {hairColor}
              </td>
            </tr>
            <tr>
              <td className="border-b py-6 text-left text-light text-2xl leading-8 font-bold">
                Skin Color
              </td>
              <td className="border-b py-6 text-right text-dark text-2xl leading-8 font-bold">
                {skinColor}
              </td>
            </tr>
            <tr>
              <td className="border-b py-6 text-left text-light text-2xl leading-8 font-bold">
                Birth Year
              </td>
              <td className="border-b py-6 text-right text-dark text-2xl leading-8 font-bold">
                {person.birthYear}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="vehicles mt-12">
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
            {vehicles.length ? (
              vehicles.map((v) => (
                <tr key={v.id}>
                  <td className="border-b py-6 text-left text-light text-2xl leading-8 font-bold">
                    {v.name}
                  </td>
                  <td className="border-b py-6 text-right text-dark text-2xl leading-8 font-bold">
                    {v.maxAtmospheringSpeed}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="py-6 text-left text-light text-2xl leading-8 font-bold"
                  colSpan={2}
                >
                  No data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;

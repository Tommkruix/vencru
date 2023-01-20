import { FC, ReactElement } from "react";

import { Project } from "@/store";
import { ProjectType } from "@/utils/types";

import { ArrowDownIcon, CheckIcon, DownloadIcon } from "@/assets/icons";

const Table: FC = (): ReactElement => {
  const renderImage = (users: string[]) => {
    return users.map((user, index) => {
      const firstUser = users.entries().next().value;

      return (
        <img
          key={index}
          className={`w-6 h-6 ${
            firstUser !== user && "-ml-1"
          } rounded-full border-gray-200 border transform hover:scale-125`}
          src={user}
          alt="random-user.png"
        />
      );
    });
  };

  const renderTableItem = (projects: ProjectType[]) => {
    return projects.map(({ amount, date, status, title, users }, index) => (
      <tr className="bg-white border-b hover:bg-gray-50" key={index}>
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-sm text-gray-900 whitespace-nowrap"
        >
          {title}
        </th>
        <td className="px-6 py-4 text-gray-500 font-sm">{amount}</td>
        <td className="px-6 py-4 text-gray-500 font-sm">{date}</td>
        <td className="px-6 py-4 text-gray-500 font-sm">
          <span className="bg-success-50 p-1 w-16 rounded-full place-content-center flex flex-row">
            <CheckIcon className="mr-2 mt-1" />
            <span className="text-success-700">
              {status ? "Paid" : "Not paid"}
            </span>
          </span>
        </td>
        <td className="px-6 py-4">
          <div className="md:flex lg:flex lg:flex items-center">
            {users.length < 6 ? (
              renderImage(users)
            ) : (
              <>
                {renderImage(users.slice(0, 5))}
                <span className="text-gray-600 text-xs bg-gray-50 transform hover:scale-125 text-center -ml-1 p-1 pb-5  w-6 h-6 rounded-full border border-white border-2">
                  {users.length - 5}
                </span>
              </>
            )}
          </div>
        </td>
        <td className="px-6 py-4">
          <DownloadIcon />
        </td>
      </tr>
    ));
  };

  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg border border-2 border-gray-100">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-gray-500 bg-gray-50">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded-full focus:ring-gray-500 dark:focus:ring-blue-600 focus:ring-2"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  select all
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="flex flex-row">
                Invoice <ArrowDownIcon className="ml-2 mt-0.5" />
              </span>
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Users on plan
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>{renderTableItem(Project)}</tbody>
      </table>
    </div>
  );
};

export default Table;

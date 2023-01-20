import { FC, ReactElement } from "react";

import Table from "@/components/Table/Table";

import { GroupButtonItems, PaymentMethods } from "@/store";
import { GroupButtonType, PaymentMethodType } from "@/utils/types";

import { DownloadIcon, MailIcon, PlusIcon } from "@/assets/icons";

const MainLayout: FC = (): ReactElement => {
  const renderPaymentMethodCard = (paymentMethods: PaymentMethodType[]) => (
    <div>
      {paymentMethods.map(({ expiryDate, icon, isClicked, last4 }, index) => (
        <p key={index}>
          <div
            className={`flex items-center space-x-4 ${
              isClicked ? "border-primary-300" : "border-gray-100"
            } ${
              isClicked ? "bg-primary-50" : "bg-white"
            } border-2 rounded-md py-4 px-8`}
          >
            <div className="flex-shrink-0 -mt-10">{icon}</div>
            <div className="flex-1 min-w-0">
              <p
                className={`text-md font-medium ${
                  isClicked ? "text-primary-800" : "text-gray-900"
                } truncate`}
              >
                {last4}
              </p>
              <p
                className={`text-md ${
                  isClicked ? "text-primary-600" : "text-gray-500"
                } truncate`}
              >
                {expiryDate}
              </p>
              <p
                className={`text-md mt-2 ${
                  isClicked ? "text-primary-500" : "text-gray-500"
                } truncate`}
              >
                Set as default{" "}
                <span className="ml-4 font-semibold text-primary-700">
                  Edit
                </span>
              </p>
            </div>
            <div className="inline-flex -mt-12 items-center">
              <div className="custom_checkbox">
                <input
                  itemID="custom_checkbox"
                  type="checkbox"
                  checked={isClicked}
                  id="custom_checkbox"
                />
                <label htmlFor="custom_checkbox"></label>
              </div>
            </div>
          </div>
          <br />
        </p>
      ))}
      <span className="flex flex-row">
        <PlusIcon className="mr-4" /> Add new payment method
      </span>
    </div>
  );

  const renderGroupButtons = (navs: GroupButtonType[]) => {
    const firstNav = GroupButtonItems[0].title;
    const lastNav = GroupButtonItems[GroupButtonItems.length - 1].title;

    return (
      <div className="flex overflow-x-auto">
        {navs.map(({ title }, index) => (
          <button
            key={index}
            className={`
            ${firstNav === title && "border rounded-l-lg"}
            ${firstNav !== title && lastNav !== title && "border-y border-r"}
            ${lastNav === title && "border rounded-r-lg border-l-0"}
             text-slate-800 flex-shrink-0 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-slate-200 font-medium px-4 py-2 inline-flex space-x-1 items-center`}
          >
            <span>{title}</span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <main className="flex-col bg-gray-50 p-8">
      <section className="mb-8 -mt-4">
        <h1 className="text-3xl font-semibold text-gray-900">Settings</h1>
        <span className="text-sm font-light text-gray-500">
          Manage your team and preferences here.
        </span>
        <br />
      </section>
      <section className="my-4">{renderGroupButtons(GroupButtonItems)}</section>
      <section className="my-4">
        <h1 className="text-md font-semibold text-gray-900">Payment Method</h1>
        <span className="text-sm font-light text-gray-500">
          Update your billing details and address.
        </span>
        <br />
      </section>
      <div className="border-b-2"></div>
      <section className="my-8 md:grid md:grid-cols-5 gap-4">
        <div className="col-span-1 border-b-2 my-8 py-8 md:py-0 lg:py-0 xl:py-0 md:my-0 lg:my-0 xl:my-0 md:border-b-0 lg:border-b-0 xl:border-b-0">
          <h1 className="text-md font-semibold text-gray-900">Contact email</h1>
          <span className="text-sm font-light text-gray-500">
            Where should invoices be sent?
          </span>
        </div>
        <div className="col-span-4">
          <div className="flex">
            <div className="flex items-center h-5">
              <input
                id="helper-radio"
                aria-describedby="helper-radio-text"
                type="radio"
                value=""
                className="w-4 h-4 text-primary-600 bg-gray-100 accent-primary-600 border-gray-300 focus:ring-primary-600 focus:ring-2"
              />
            </div>
            <div className="ml-2 text-sm">
              <label
                htmlFor="helper-radio"
                className="text-sm font-semibold text-gray-500"
              >
                Send to my account email
              </label>

              <p
                id="helper-radio-text"
                className="text-sm font-light text-gray-500"
              >
                olivia@untitledui.com
              </p>
            </div>
          </div>
          <div className="my-4 block">
            <div className="flex items-center h-5">
              <input
                id="helper-radio2"
                aria-describedby="helper-radio-text2"
                type="radio"
                value=""
                checked
                className="w-4 h-4 text-primary-600 bg-gray-100 accent-primary-600 border-gray-300 focus:ring-primary-600 focus:ring-2"
              />
              <label
                htmlFor="helper-radio2"
                className="text-sm ml-2 font-semibold text-gray-500"
              >
                Send to an alternative email
              </label>
            </div>
            <div className="ml-6 my-2 text-sm">
              <p
                id="helper-radio-text2"
                className="text-sm font-normal text-gray-900"
              >
                <form>
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <MailIcon />
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="placeholder-gray-900 h-10 p-4 pl-10 w-full md:w-3/4 bg-white-50 rounded-lg border border-gray-300"
                      placeholder="billing@untitledui.com"
                      required
                    />
                  </div>
                </form>
              </p>
            </div>
          </div>
        </div>
        <br />
      </section>
      {/* Secod Section */}
      <div className="border-b-2"></div>
      <section className="my-8 md:grid md:grid-cols-5 gap-4">
        <div className="col-span-1 border-b-2 my-8 py-8 md:py-0 lg:py-0 xl:py-0 md:my-0 lg:my-0 xl:my-0 md:border-b-0 lg:border-b-0 xl:border-b-0">
          <h1 className="text-md font-semibold text-gray-900">Card details</h1>
          <span className="text-sm font-light text-gray-500">
            Select default payment method.
          </span>
        </div>
        <div className="col-span-4">
          {renderPaymentMethodCard(PaymentMethods)}
        </div>
        <br />
      </section>
      {/* Third Section */}
      <section className="my-8 md:grid md:grid-cols-2 gap-4">
        <div className="my-4 md:py-0 lg:py-0 xl:py-0 md:my-0 lg:my-0 xl:my-0">
          <span className="text-lg font-semibold text-gray-900">
            Billing History
          </span>
        </div>
        <div className="text-left md:text-right xl:text-right lg:text-right">
          <button
            type="button"
            className="text-gray-700 text-sm bg-white border-2 border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <DownloadIcon className="w-4 h-4 mr-2 -ml-1" />
            Download all
          </button>
        </div>
        <br />
      </section>
      {/* Fourth Section */}
      <section className="my-8">
        <Table />
        <br />
      </section>
    </main>
  );
};

export default MainLayout;

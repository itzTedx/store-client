import { Button } from "@/components/ui/button";
import { Download, Printer, ShoppingBag } from "lucide-react";
import React from "react";

const InvoicePage = () => {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  return (
    <div>
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
        <div className="sm:w-11/12 lg:w-3/4 mx-auto">
          <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
            <div className="flex justify-between">
              <ShoppingBag />

              <div className="text-end">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                  Invoice
                </h2>
                <span className="mt-1 block text-gray-500">
                  # {Math.floor(Math.random() * 100 + 1)}
                </span>
                <address className="mt-4 not-italic text-gray-800 dark:text-gray-200">
                  Digital Desk General Trading
                  <br />
                  Al Qusais, Dubai
                  <br />
                  United Arab Emirates
                  <br />
                </address>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Bill to:
                </h3>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  Melwin Af
                </h3>
                <address className="mt-2 not-italic text-gray-500">
                  220, New Al Zarooni
                  <br />
                  Al Qusais, Dubai
                  <br />
                  United Arab Emirates
                  <br />
                </address>
              </div>

              <div className="sm:text-end space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Invoice date:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {today.toDateString()}
                    </dd>
                  </dl>
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Due date:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      {today.toDateString()}
                    </dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                <div className="hidden sm:grid sm:grid-cols-5">
                  <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                    Item
                  </div>
                  <div className="text-start text-xs font-medium text-gray-500 uppercase">
                    Qty
                  </div>
                  <div className="text-start text-xs font-medium text-gray-500 uppercase">
                    Price
                  </div>
                  <div className="text-end text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </div>
                </div>
                <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700" />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Item
                    </h5>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Standard Business Card
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Qty
                    </h5>
                    <p className="text-gray-800 dark:text-gray-200">1000</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Rate
                    </h5>
                    <p className="text-gray-800 dark:text-gray-200">89</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </h5>
                    <p className="sm:text-end text-gray-800 dark:text-gray-200">
                      AED 89
                    </p>
                  </div>
                </div>
                <div className="sm:hidden border-b border-gray-200 dark:border-gray-700" />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Item
                    </h5>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      A5 Flyer - 170 glossy
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Qty
                    </h5>
                    <p className="text-gray-800 dark:text-gray-200">500</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Rate
                    </h5>
                    <p className="text-gray-800 dark:text-gray-200">120</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </h5>
                    <p className="sm:text-end text-gray-800 dark:text-gray-200">
                      AED 120
                    </p>
                  </div>
                </div>
                <div className="sm:hidden border-b border-gray-200 dark:border-gray-700" />
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Item
                    </h5>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Sticker
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Qty
                    </h5>
                    <p className="text-gray-800 dark:text-gray-200">100</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Rate
                    </h5>
                    <p className="text-gray-800 dark:text-gray-200">55</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </h5>
                    <p className="sm:text-end text-gray-800 dark:text-gray-200">
                      AED 55
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex sm:justify-end">
              <div className="w-full max-w-2xl sm:text-end space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Subtotal:
                    </dt>
                    <dd className="col-span-2 text-gray-500">AED 264.00</dd>
                  </dl>
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Total:
                    </dt>
                    <dd className="col-span-2 text-gray-500">$2750.00</dd>
                  </dl>
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Tax:
                    </dt>
                    <dd className="col-span-2 text-gray-500">$39.00</dd>
                  </dl>
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Amount paid:
                    </dt>
                    <dd className="col-span-2 text-gray-500">$2789.00</dd>
                  </dl>
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Due balance:
                    </dt>
                    <dd className="col-span-2 text-gray-500">$0.00</dd>
                  </dl>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Thank you!
              </h4>
              <p className="text-gray-500">
                If you have any questions concerning this invoice, use the
                following contact information:
              </p>
              <div className="mt-2">
                <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  sales@digitaldesk.ae
                </p>
                <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  +971 12 345 6789
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end gap-x-3">
            <Button variant="outline" className="rounded-md">
              <Download className="h-4 w-4" />
              Invoice PDF
            </Button>
            <Button className="flex gap-2 rounded-md">
              <Printer className="w-4 h-4" />
              Print
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;

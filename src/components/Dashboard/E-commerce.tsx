"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import MapOne from "../Maps/MapOne";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 2xl:gap-7.5">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Sistem Pakar
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Waktu Panen <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Masukkan waktu panen(bulan)"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Budget Tahunan <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Masukkan budget tahunan (Rupiah)"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <SelectGroupOne
                  TitleText="Metode Panen"
                  CommandText="Pilih Metode Panen"
                  options={[
                    { key: "1", value: "Metode 1" },
                    { key: "2", value: "Metode 2" },
                    { key: "3", value: "Metode 3" },
                  ]}
                />
                <SelectGroupOne
                  TitleText="Jenis Pakan"
                  CommandText="Pilih Jenis Pakan"
                  options={[
                    { key: "1", value: "Metode 1" },
                    { key: "2", value: "Metode 2" },
                    { key: "3", value: "Metode 3" },
                  ]}
                />
                <SelectGroupOne
                  TitleText="Jenis Ikan"
                  CommandText="Pilih Jenis Ikan"
                  options={[
                    { key: "1", value: "Metode 1" },
                    { key: "2", value: "Metode 2" },
                    { key: "3", value: "Metode 3" },
                  ]}
                />

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ECommerce;

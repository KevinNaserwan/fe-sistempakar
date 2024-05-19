"use client";
import React, { useState, Fragment } from "react";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";

const ECommerce: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState<{
    keyakinan: number;
    rekomendasi: string;
  } | null>(null);
  const [formData, setFormData] = useState({
    waktu_panen: "",
    budget_tahunan: "",
    metode_panen: "",
    jenis_pakan: "",
    jenis_ikan: "",
    keyakinan_metode_pakan: "",
    keyakinan_metode_panen: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSelectChange = (field: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/sistempakar",
        formData,
      );
      console.log("Data submitted successfully:", response.data);
      setResponse(response.data);
      openModal();
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const renderRecommendation = () => {
    if (!response) return null;
    switch (response.rekomendasi) {
      case "paket 1":
        return (
          <div className="my-10 text-center">
            <p className="text-gray-500 text-lg font-bold">Paket 1</p>
            <p className="text-gray-500 text-lg">Sistem Pompa Air</p>
            <p className="text-gray-500 text-lg">Alat Pemberi Pakan Otomatis</p>
          </div>
        );
      case "paket 2":
        return (
          <div className="my-10 text-center">
            <p className="text-gray-500 text-lg font-bold">Paket 2</p>
            <p className="text-gray-500 text-lg">Sistem Pompa Air</p>
            <p className="text-gray-500 text-lg">Sistem Oksigenisasi</p>
          </div>
        );
      case "paket 3":
        return (
          <div className="my-10 text-center">
            <p className="text-gray-500 text-lg font-bold">Paket 3</p>
            <p className="text-gray-500 text-lg">Sistem Pompa Air</p>
            <p className="text-gray-500 text-lg">Sistem Oksigenisasi</p>
            <p className="text-gray-500 text-lg">
              Recirculating Aquaculture System - RAS
            </p>
          </div>
        );
      case "paket 4":
        return (
          <div className="my-10 text-center">
            <p className="text-gray-500 text-lg font-bold">Paket 4</p>
            <p className="text-gray-500 text-lg">Sistem Pompa Air</p>
            <p className="text-gray-500 text-lg">Sistem Oksigenisasi</p>
            <p className="text-gray-500 text-lg">Alat Pemberi Pakan Otomatis</p>
          </div>
        );
      case "paket 5":
        return (
          <div className="my-10 text-center">
            <p className="text-gray-500 text-lg font-bold">Paket 5</p>
            <p className="text-gray-500 text-lg">Sistem Pompa Air</p>
            <p className="text-gray-500 text-lg">Sistem Oksigenisasi</p>
            <p className="text-gray-500 text-lg">
              Recirculating Aquaculture System - RAS
            </p>
            <p className="text-gray-500 text-lg">Alat Pemberi Pakan Otomatis</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-gray-900 text-lg font-medium leading-6"
                  >
                    Rekomendasi Alat
                  </Dialog.Title>
                  <div className="mt-2">{renderRecommendation()}</div>
                  {response && (
                    <div className="mt-2">
                      <p className="text-gray-500 text-sm font-semibold">
                        Dengan Keyakinan Rekomendasi {response.keyakinan}%
                      </p>
                    </div>
                  )}
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <div className="grid grid-cols-1 2xl:gap-7.5">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Sistem Pakar
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                <SelectGroupOne
                  TitleText="Waktu Panen"
                  CommandText="Pilih Waktu Panen"
                  options={[
                    { key: "Berdasarkan Waktu", value: "waktu" },
                    { key: "Berdasarkan Berat", value: "berat" },
                  ]}
                  onChange={(value) => handleSelectChange("waktu_panen", value)}
                />
                <SelectGroupOne
                  TitleText="Budget Tahunan"
                  CommandText="Pilih Budget Tahunan"
                  options={[
                    { key: "5 - 50 Juta", value: "rendah" },
                    { key: "50 - 200 Juta", value: "sedang" },
                    { key: "> 200 Juta", value: "tinggi" },
                  ]}
                  onChange={(value) =>
                    handleSelectChange("budget_tahunan", value)
                  }
                />
                <SelectGroupOne
                  TitleText="Metode Panen"
                  CommandText="Pilih Metode Panen"
                  options={[
                    { key: "Perlu Drainase", value: "perlu_drainase" },
                    {
                      key: "Tidak Perlu Drainase",
                      value: "tidak_perlu_drainase",
                    },
                  ]}
                  onChange={(value) =>
                    handleSelectChange("metode_panen", value)
                  }
                />
                <SelectGroupOne
                  TitleText="Jenis Pakan"
                  CommandText="Pilih Jenis Pakan"
                  options={[
                    { key: "Bebas", value: "bebas" },
                    { key: "Spesifik", value: "spesifik" },
                  ]}
                  onChange={(value) => handleSelectChange("jenis_pakan", value)}
                />
                <SelectGroupOne
                  TitleText="Jenis Ikan"
                  CommandText="Pilih Jenis Ikan"
                  options={[
                    { key: "Sama Jenis", value: "sama_jenis" },
                    { key: "Campur Jenis", value: "campur_jenis" },
                  ]}
                  onChange={(value) => handleSelectChange("jenis_ikan", value)}
                />
                <SelectGroupOne
                  TitleText="Keyakinan Metode Panen"
                  CommandText="Keyakinan Metode Panen"
                  options={[
                    { key: "Mungkin", value: "0.6" },
                    { key: "Kemungkinan Besar", value: "0.8" },
                    { key: "Pasti", value: "1" },
                  ]}
                  onChange={(value) =>
                    handleSelectChange("keyakinan_metode_panen", value)
                  }
                />
                <SelectGroupOne
                  TitleText="Keyakinan Jenis Pakan"
                  CommandText="Keyakinan Jenis Pakan"
                  options={[
                    { key: "Mungkin", value: "0.6" },
                    { key: "Kemungkinan Besar", value: "0.8" },
                    { key: "Pasti", value: "1" },
                  ]}
                  onChange={(value) =>
                    handleSelectChange("keyakinan_metode_pakan", value)
                  }
                />

                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                >
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

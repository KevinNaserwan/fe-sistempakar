"use client";
import React, { useState } from "react";
import SelectGroupOne from "../SelectGroup/SelectGroupOne";
import axios from "axios";

const ECommerce: React.FC = () => {
  const [formData, setFormData] = useState({
    waktu_panen: "",
    budget_tahunan: "",
    metode_panen: "",
    jenis_pakan: "",
    jenis_ikan: "",
    keyakinan_metode_pakan: "",
    keyakinan_metode_panen: "",
  });

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
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

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
                    { key: "Mungkin", value: 0.6 },
                    { key: "Kemungkinan Besar", value: 0.8 },
                    { key: "Pasti", value: 1 },
                  ]}
                  onChange={(value) =>
                    handleSelectChange("keyakinan_metode_panen", value)
                  }
                />
                <SelectGroupOne
                  TitleText="Keyakinan Jenis Pakan"
                  CommandText="Keyakinan Jenis Pakan"
                  options={[
                    { key: "Mungkin", value: 0.6 },
                    { key: "Kemungkinan Besar", value: 0.8 },
                    { key: "Pasti", value: 1 },
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

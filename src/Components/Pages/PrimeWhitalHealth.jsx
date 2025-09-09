import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../../assets/6.jpg";
import Image2 from "../../assets/7.jpg";
import Image3 from "../../assets/8.jpg";
import Image4 from "../../assets/9.jpg";
import Image5 from "../../assets/10.jpg";
import { useNavigate } from "react-router-dom";
const Primewhitalhelth = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  const packages = [
    {
      title: "Basic Package",
      description: "Basic Health Checkup Package",
      price: "₹1199",
      originalPrice: "₹2299",
      image: Image1,
      tests:
        "CBC (28 TESTS), Thyroid Profile (1 TEST), Diabetes Profile (2 TESTS), Bone Health Profile (2 TESTS), Iron Profile (3 TESTS), Lipid Profile (8 TESTS), Liver Function Test (12 TESTS), Kidney Function Test (9 TESTS), Urine Routine & Microscopy (19 TESTS)",
      fullDescription:
        "Our Basic Package provides a comprehensive health screening with over 80 parameters. This package helps detect early signs of conditions such as anemia, thyroid dysfunction, diabetes, liver/kidney disorders, bone health issues, and more. Ideal for preventive health monitoring and annual checkups.",
      benefits: [
        "Over 80 health parameters covered",
        "Detects infections, anemia, diabetes, liver/kidney disorders",
        "Includes CBC, LFT, KFT, Lipid, Iron, Thyroid, and more",
        "Quick report delivery within 24 hours",
        "Free home sample collection",
      ],
      preparation:
        "Fasting for 8–12 hours is recommended. Avoid alcohol and heavy meals 24 hours before testing.",
      detailedTests: {
        CBC: [
          "HB",
          "TLC",
          "Neutrophil",
          "Lymphocyte",
          "Eosinophil",
          "Monocyte",
          "Basophil",
          "Platelet Count",
          "Platelet Larger Cell Ratio",
          "Immature Granulocyte",
          "PCV",
          "PCT",
          "PLCC",
          "RBC",
          "MCV",
          "MCH",
          "MCHC",
          "MPV",
          "PDW",
          "RDW-SD",
          "RDW-CV",
          "Absolute Neutrophil Count",
          "Absolute Lymphocyte Count",
          "Absolute Monocyte Count",
          "Absolute Basophil Count",
          "Absolute Eosinophil Count",
          "ESR",
        ],
        ThyroidProfile: ["TSH (Thyroid Stimulating Hormone)"],
        DiabetesProfile: ["Blood Sugar", "Urine Sugar"],
        BoneHealthProfile: ["Calcium", "Phosphorus", "Alkaline Phosphate"],
        IronProfile: ["Iron", "Transferrin Saturation", "TIBC"],
        LipidProfile: [
          "Total Cholesterol",
          "Triglycerides",
          "HDL",
          "LDL",
          "VLDL",
          "Total Cholesterol/HDL Ratio",
          "LDL/HDL Ratio",
          "Non-HDL Ratio",
        ],
        LiverFunctionTest: [
          "SGPT",
          "SGOT",
          "Total Proteins",
          "Albumin",
          "Globulin",
          "A:G Ratio",
          "Bilirubin - Direct",
          "Bilirubin - Indirect",
          "Bilirubin - Total",
          "Serum Protein",
          "SGOT/SGPT Ratio",
          "Gamma GT",
        ],
        KidneyFunctionTest: [
          "Urea",
          "Creatinine",
          "Uric Acid",
          "Calcium",
          "Phosphorus",
          "Sodium",
          "Potassium",
          "Chloride",
          "Bicarbonate",
        ],
        UrineRoutineAndMicroscopy: [
          "Quantity",
          "Urobilinogen",
          "Ketone",
          "RBC’s",
          "Casts",
          "Crystals",
          "Colour",
          "Pus Cells",
          "Specific Gravity",
          "Transparency",
          "pH",
          "Blood",
          "Nitrite",
          "Epithelial Cells",
          "Bacteria",
          "Urine Protein (Albumin)",
          "Urine Bilirubin",
          "Urine Glucose",
          "Yeast",
        ],
      },
    },

    {
      title: "Comprehensive Package",
      description: "Comprehensive  Package",
      price: "₹1199",
      originalPrice: "₹2299",
      image: Image2,
      tests:
        "CBC (28 TESTS), Thyroid Profile (3 TESTS), Diabetes Profile (4 TESTS), Bone Health Profile (3 TESTS), Iron Profile (3 TESTS), Lipid Profile (8 TESTS), Liver Function Test (12 TESTS), Kidney Function Test (9 TESTS), Urine Routine & Microscopy (19 TESTS), Vitamin Profile (2 TESTS)",
      fullDescription:
        "The Comprehensive Health Checkup Package covers over 90 parameters to assess your overall well-being. It includes detailed tests for blood, liver, kidney, thyroid, bone health, vitamins, lipids, and diabetes. Ideal for annual health evaluations, it helps detect early signs of various diseases and deficiencies.",
      benefits: [
        "Over 90+ health parameters covered",
        "Covers all major organ systems and health risks",
        "Includes Vitamin, Thyroid, Liver, Kidney, CBC, Lipid profiles",
        "Helps diagnose deficiencies, infections, metabolic conditions",
        "Free home sample collection & expert consultation",
      ],
      preparation:
        "Fasting for 10–12 hours is required. Avoid alcohol and strenuous activity 24 hours before sample collection.",
      detailedTests: {
        CBC: [
          "HB",
          "TLC",
          "Neutrophil",
          "Lymphocyte",
          "Eosinophil",
          "Monocyte",
          "Basophil",
          "Platelet Count",
          "Platelet Larger Cell Ratio",
          "Immature Granulocyte",
          "PCV",
          "PCT",
          "PLCC",
          "RBC",
          "MCV",
          "MCH",
          "MCHC",
          "MPV",
          "PDW",
          "RDW-SD",
          "RDW-CV",
          "Absolute Neutrophil Count",
          "Absolute Lymphocyte Count",
          "Absolute Monocyte Count",
          "Absolute Basophil Count",
          "Absolute Eosinophil Count",
          "ESR",
        ],
        ThyroidProfile: ["TSH (Thyroid Stimulating Hormone)", "T3", "T4"],
        DiabetesProfile: [
          "Blood Sugar",
          "Urine Sugar",
          "HbA1c",
          "Average Blood Sugar",
        ],
        BoneHealthProfile: ["Calcium", "Phosphorus", "Alkaline Phosphate"],
        IronProfile: ["Iron", "Transferrin Saturation", "TIBC"],
        LipidProfile: [
          "Total Cholesterol",
          "Triglycerides",
          "HDL",
          "LDL",
          "VLDL",
          "Total Cholesterol/HDL Ratio",
          "LDL/HDL Ratio",
          "Non-HDL Ratio",
        ],
        LiverFunctionTest: [
          "SGPT",
          "SGOT",
          "Total Proteins",
          "Albumin",
          "Globulin",
          "A:G Ratio",
          "Bilirubin - Direct",
          "Bilirubin - Indirect",
          "Bilirubin - Total",
          "Serum Protein",
          "SGOT/SGPT Ratio",
          "Gamma GT",
        ],
        KidneyFunctionTest: [
          "Urea",
          "Creatinine",
          "Uric Acid",
          "Calcium",
          "Phosphorus",
          "Sodium",
          "Potassium",
          "Chloride",
          "Bicarbonate",
        ],
        UrineRoutineAndMicroscopy: [
          "Quantity",
          "Urobilinogen",
          "Ketone",
          "RBC’s",
          "Casts",
          "Crystals",
          "Colour",
          "Pus Cells",
          "Specific Gravity",
          "Transparency",
          "pH",
          "Blood",
          "Nitrite",
          "Epithelial Cells",
          "Bacteria",
          "Urine Protein (Albumin)",
          "Urine Bilirubin",
          "Urine Glucose",
          "Yeast",
        ],
        VitaminProfile: ["Vitamin D", "Vitamin B12"],
      },
    },

    {
      title: "Total Package",
      description: "Total Health Checkup Package",
      price: "₹1199",
      originalPrice: "₹2299",
      image: Image3,
      tests:
        "CBC (28 TESTS), Thyroid Profile (3 TESTS), Diabetes Profile (4 TESTS), Vitamin Profile (2 TESTS), Arthritis Profile (2 TESTS), Cancer Markers (2 TESTS), Lipid Profile (8 TESTS), Liver Function Test (12 TESTS), Kidney Function Test (10 TESTS), Bone Health Profile (3 TESTS), Iron Profile (4 TESTS), Urine Routine & Microscopy (19 TESTS)",
      fullDescription:
        "Our Total Package is the most exhaustive diagnostic solution with over 100 test parameters. It combines advanced blood analysis, hormonal, metabolic, vitamin, cancer, and organ function tests to provide a 360-degree view of your health. Ideal for annual screenings and chronic condition monitoring.",
      benefits: [
        "Over 100 health parameters analyzed",
        "Includes CBC, Thyroid, Diabetes, Lipid, Liver, Kidney, Vitamin, Cancer markers",
        "Detects deficiencies, infections, inflammation, and chronic risks",
        "Free home sample collection & follow-up consultation",
        "Detailed and personalized health report",
      ],
      preparation:
        "Fasting for 12 hours is required. Avoid medications affecting blood clotting 48 hours before sample collection. Stay hydrated and avoid alcohol 24 hours prior.",
      detailedTests: {
        CBC: [
          "HB",
          "TLC",
          "Neutrophil",
          "Lymphocyte",
          "Eosinophil",
          "Monocyte",
          "Basophil",
          "Platelet Count",
          "Platelet Larger Cell Ratio",
          "Immature Granulocyte",
          "PCV",
          "PCT",
          "PLCC",
          "RBC",
          "MCV",
          "MCH",
          "MCHC",
          "MPV",
          "PDW",
          "RDW-SD",
          "RDW-CV",
          "Absolute Neutrophil Count",
          "Absolute Lymphocyte Count",
          "Absolute Monocyte Count",
          "Absolute Basophil Count",
          "Absolute Eosinophil Count",
          "ESR",
        ],
        ThyroidProfile: ["TSH (Thyroid Stimulating Hormone)", "T3", "T4"],
        DiabetesProfile: [
          "Blood Sugar",
          "Urine Sugar",
          "HbA1c",
          "Average Blood Sugar",
        ],
        VitaminProfile: ["Vitamin D", "Vitamin B12"],
        ArthritisProfile: ["RA Factor", "C-Reactive Protein (CRP)"],
        CancerMarkers: ["PSA (For Male)", "CA125 (For Female)"],
        LipidProfile: [
          "Total Cholesterol",
          "Triglycerides",
          "HDL",
          "LDL",
          "VLDL",
          "Total Cholesterol/HDL Ratio",
          "LDL/HDL Ratio",
          "Non-HDL Ratio",
        ],
        LiverFunctionTest: [
          "SGPT",
          "SGOT",
          "Total Proteins",
          "Albumin",
          "Globulin",
          "A:G Ratio",
          "Bilirubin - Direct",
          "Bilirubin - Indirect",
          "Bilirubin - Total",
          "Serum Protein",
          "SGOT/SGPT Ratio",
          "Gamma GT",
        ],
        KidneyFunctionTest: [
          "Urea",
          "Uric Acid",
          "Blood Urea Nitrogen (BUN)",
          "Creatinine",
          "Urea/Creatinine Ratio",
          "BUN/Creatinine Ratio",
          "Sodium",
          "Potassium",
          "Chloride",
          "Bicarbonate",
        ],
        BoneHealthProfile: ["Calcium", "Phosphorus", "Alkaline Phosphate"],
        IronProfile: ["Serum Iron", "Transferrin Saturation", "TIBC", "UIBC"],
        UrineRoutineAndMicroscopy: [
          "Quantity",
          "Urobilinogen",
          "Ketone",
          "RBC’s",
          "Casts",
          "Crystals",
          "Colour",
          "Pus Cells",
          "Specific Gravity",
          "Transparency",
          "pH",
          "Blood",
          "Nitrite",
          "Epithelial Cells",
          "Bacteria",
          "Urine Protein (Albumin)",
          "Urine Bilirubin",
          "Urine Glucose",
          "Yeast",
        ],
      },
    },

    {
      title: "Advance Package – Female",
      description: "Advance Health Checkup for Women",
      price: "₹1199",
      originalPrice: "₹2299",
      image: Image4,
      tests:
        "CBC (28 TESTS), Thyroid Profile (3 TESTS), Diabetes Profile (4 TESTS), Vitamin Profile (2 TESTS), Arthritis Profile (2 TESTS), Cancer Markers (2 TESTS), Lipid Profile (8 TESTS), Liver Function Test (12 TESTS), Kidney Function Test (10 TESTS), Bone Health Profile (3 TESTS), Iron Profile (4 TESTS), Urine Routine & Microscopy (19 TESTS), Hormone Profile (4 TESTS), STD Profile (4 TESTS)",
      fullDescription:
        "Specially designed for women, this comprehensive health package includes vital tests for early detection of anemia, hormonal imbalances, nutritional deficiencies, chronic diseases, and reproductive health markers. Ideal for preventive care and personalized wellness monitoring.",
      benefits: [
        "Women-specific diagnostic coverage",
        "Covers hormonal, cancer, STD, and fertility markers",
        "Detects anemia, thyroid disorders, and deficiencies",
        "Over 100 parameters for holistic health tracking",
        "Includes expert consultation and home sample collection",
      ],
      preparation:
        "Fasting for 8–10 hours is recommended. For accurate hormone and STD results, avoid testing during the menstrual period and consult for medication restrictions.",
      detailedTests: {
        CBC: [
          "HB",
          "TLC",
          "Neutrophil",
          "Lymphocyte",
          "Eosinophil",
          "Monocyte",
          "Basophil",
          "Platelet Count",
          "Platelet Larger Cell Ratio",
          "Immature Granulocyte",
          "PCV",
          "PCT",
          "PLCC",
          "RBC",
          "MCV",
          "MCH",
          "MCHC",
          "MPV",
          "PDW",
          "RDW-SD",
          "RDW-CV",
          "Absolute Neutrophil Count",
          "Absolute Lymphocyte Count",
          "Absolute Monocyte Count",
          "Absolute Basophil Count",
          "Absolute Eosinophil Count",
          "ESR",
        ],
        ThyroidProfile: ["TSH (Thyroid Stimulating Hormone)", "T3", "T4"],
        DiabetesProfile: [
          "Blood Sugar",
          "Urine Sugar",
          "HbA1c",
          "Average Blood Sugar",
        ],
        VitaminProfile: ["Vitamin D", "Vitamin B12"],
        ArthritisProfile: ["RA Factor", "C-Reactive Protein (CRP)"],
        CancerMarkers: ["PSA (For Male)", "CA125 (For Female)"],
        LipidProfile: [
          "Total Cholesterol",
          "Triglycerides",
          "HDL",
          "LDL",
          "VLDL",
          "Total Cholesterol/HDL Ratio",
          "LDL/HDL Ratio",
          "Non-HDL Ratio",
        ],
        LiverFunctionTest: [
          "SGPT",
          "SGOT",
          "Total Proteins",
          "Albumin",
          "Globulin",
          "A:G Ratio",
          "Bilirubin - Direct",
          "Bilirubin - Indirect",
          "Bilirubin - Total",
          "Serum Protein",
          "SGOT/SGPT Ratio",
          "Gamma GT",
        ],
        KidneyFunctionTest: [
          "Urea",
          "Uric Acid",
          "Blood Urea Nitrogen (BUN)",
          "Creatinine",
          "Urea/Creatinine Ratio",
          "BUN/Creatinine Ratio",
          "Sodium",
          "Potassium",
          "Chloride",
          "Bicarbonate",
        ],
        BoneHealthProfile: ["Calcium", "Phosphorus", "Alkaline Phosphate"],
        IronProfile: ["Serum Iron", "Transferrin Saturation", "TIBC", "UIBC"],
        UrineRoutineAndMicroscopy: [
          "Quantity",
          "Urobilinogen",
          "Ketone",
          "RBC’s",
          "Casts",
          "Crystals",
          "Colour",
          "Pus Cells",
          "Specific Gravity",
          "Transparency",
          "pH",
          "Blood",
          "Nitrite",
          "Epithelial Cells",
          "Bacteria",
          "Urine Protein (Albumin)",
          "Urine Bilirubin",
          "Urine Glucose",
          "Yeast",
        ],
        HormoneProfile: ["LH", "FSH", "PRL", "Testosterone Total"],
        STDProfile: ["HIV 1 & 2", "HBSAG", "HCV", "VDRL"],
      },
    },

    {
      title: "Advance Package – Men",
      description: "Advance Health Checkup for Men",
      price: "₹1199",
      originalPrice: "₹2299",
      image: Image5,
      tests:
        "CBC (28 TESTS), Thyroid Profile (3 TESTS), Diabetes Profile (4 TESTS), Vitamin Profile (2 TESTS), Arthritis Profile (2 TESTS), Cancer Markers (2 TESTS), Lipid Profile (8 TESTS), Liver Function Test (12 TESTS), Kidney Function Test (10 TESTS), Bone Health Profile (3 TESTS), Iron Profile (4 TESTS), Urine Routine & Microscopy (19 TESTS), Hormone Profile (1 TEST), STD Profile (4 TESTS)",
      fullDescription:
        "Tailored for men, this all-in-one package covers a wide range of diagnostics including hormonal, cardiac, kidney, liver, and cancer screenings. It’s ideal for comprehensive health monitoring, lifestyle evaluation, and early disease detection in men.",
      benefits: [
        "Full-body health screening focused on male needs",
        "Includes cancer markers and testosterone",
        "Tests for cholesterol, liver, kidney, diabetes, and bone health",
        "Over 100 parameters for accurate health analysis",
        "Home sample collection & free follow-up consultation",
      ],
      preparation:
        "Fasting for 10–12 hours required. Avoid alcohol, smoking, and strenuous exercise 24 hours before the test. Consult doctor for medication-related precautions.",
      detailedTests: {
        CBC: [
          "HB",
          "TLC",
          "Neutrophil",
          "Lymphocyte",
          "Eosinophil",
          "Monocyte",
          "Basophil",
          "Platelet Count",
          "Platelet Larger Cell Ratio",
          "Immature Granulocyte",
          "PCV",
          "PCT",
          "PLCC",
          "RBC",
          "MCV",
          "MCH",
          "MCHC",
          "MPV",
          "PDW",
          "RDW-SD",
          "RDW-CV",
          "Absolute Neutrophil Count",
          "Absolute Lymphocyte Count",
          "Absolute Monocyte Count",
          "Absolute Basophil Count",
          "Absolute Eosinophil Count",
          "ESR",
        ],
        ThyroidProfile: ["TSH (Thyroid Stimulating Hormone)", "T3", "T4"],
        DiabetesProfile: [
          "Blood Sugar",
          "Urine Sugar",
          "HbA1c",
          "Average Blood Sugar",
        ],
        VitaminProfile: ["Vitamin D", "Vitamin B12"],
        ArthritisProfile: ["RA Factor", "C-Reactive Protein (CRP)"],
        CancerMarkers: ["PSA (For Male)", "CA125 (For Female)"],
        LipidProfile: [
          "Total Cholesterol",
          "Triglycerides",
          "HDL",
          "LDL",
          "VLDL",
          "Total Cholesterol/HDL Ratio",
          "LDL/HDL Ratio",
          "Non-HDL Ratio",
        ],
        LiverFunctionTest: [
          "SGPT",
          "SGOT",
          "Total Proteins",
          "Albumin",
          "Globulin",
          "A:G Ratio",
          "Bilirubin - Direct",
          "Bilirubin - Indirect",
          "Bilirubin - Total",
          "Serum Protein",
          "SGOT/SGPT Ratio",
          "Gamma GT",
        ],
        KidneyFunctionTest: [
          "Urea",
          "Uric Acid",
          "Blood Urea Nitrogen (BUN)",
          "Creatinine",
          "Urea/Creatinine Ratio",
          "BUN/Creatinine Ratio",
          "Sodium",
          "Potassium",
          "Chloride",
          "Bicarbonate",
        ],
        BoneHealthProfile: ["Calcium", "Phosphorus", "Alkaline Phosphate"],
        IronProfile: ["Serum Iron", "Transferrin Saturation", "TIBC", "UIBC"],
        UrineRoutineAndMicroscopy: [
          "Quantity",
          "Urobilinogen",
          "Ketone",
          "RBC’s",
          "Casts",
          "Crystals",
          "Colour",
          "Pus Cells",
          "Specific Gravity",
          "Transparency",
          "pH",
          "Blood",
          "Nitrite",
          "Epithelial Cells",
          "Bacteria",
          "Urine Protein (Albumin)",
          "Urine Bilirubin",
          "Urine Glucose",
          "Yeast",
        ],
        HormoneProfile: ["Testosterone Total"],
        STDProfile: ["HIV 1 & 2", "HBSAG", "HCV", "VDRL"],
      },
    },
  ];

  const openModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-sky-800 mb-2">
        Prime Vital Healthcare Lab Packages
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Choose from our comprehensive range of diagnostic tests with complete
        convenience
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {packages.map((pkg, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-xl rounded-2xl p-5 w-full max-w-sm flex flex-col justify-between hover:shadow-2xl transition"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
          >
            <div className="relative">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-52 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center rounded-xl">
                <h2 className="text-white text-xl font-semibold text-center px-2 ">
                  {pkg.title}
                </h2>
              </div>
            </div>

            <div className="mt-4">
              <p className=" mb-1 text-xl font-bold text-sky-800">{pkg.description}</p>
              <div className="text-blue-600 text-lg font-bold">
                {pkg.price}{" "}
                <span className="line-through text-gray-400 text-sm">
                  {pkg.originalPrice}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{pkg.tests}</p>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600" onClick={handleClick}>
                Book
              </button>
              <button
                onClick={() => openModal(pkg)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-300"
              >
                Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-transperent bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-sky-800 mb-2">
                  {selectedPackage.title}
                </h2>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-sky-800">
                    {selectedPackage.price}
                  </span>
                  <span className="line-through text-sky-800">
                    {selectedPackage.originalPrice}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-sky-800 mb-2">
                      Description
                    </h3>
                    <p className="text-gray-600">
                      {selectedPackage.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-sky-800 mb-2">
                      Tests Included
                    </h3>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded-lg">
                      {selectedPackage.tests}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-sky-800 mb-2">
                      Benefits
                    </h3>
                    <ul className="space-y-1">
                      {selectedPackage.benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <svg
                            className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-sky-800 mb-2">
                      Preparation
                    </h3>
                    <p className="text-gray-600 bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                      {selectedPackage.preparation}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 flex-1" onClick={handleClick}>
                    Book Now
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl hover:bg-gray-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Primewhitalhelth;

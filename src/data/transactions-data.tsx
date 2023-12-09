import {
  BookCheck,
  Bus,
  CalendarRange,
  CircleDashed,
  Dumbbell,
  Glasses,
  GripHorizontal,
  IceCream,
  IndianRupee,
  Newspaper,
  Palmtree,
  Phone,
  Printer,
  School,
  Scissors,
  Send,
  Shirt,
  ShoppingCart,
  Undo2,
  Watch,
} from "lucide-react"

// yes I know it sucks this way
const yearArray = ["2020-2021", "2021-2022", "2022-2023", "2023-2024"]

export const acaYears = yearArray.map((year) => ({
  label: year,
  value: year,
  icon: CalendarRange,
}))

export const places = [
  {
    label: "AdvancePaid",
    value: "AdvancePaid",
    icon: IndianRupee,
  },
  {
    label: "BS",
    value: "BS",
    icon: CircleDashed,
  },
  {
    label: "CashRefund",
    value: "CashRefund",
    icon: Undo2,
  },
  {
    label: "Coconut",
    value: "Coconut",
    icon: Palmtree,
  },
  {
    label: "CompExam",
    value: "CompExam",
    icon: BookCheck,
  },
  {
    label: "Dhobi",
    value: "Dhobi",
    icon: Shirt,
  },
  {
    label: "HS",
    value: "HS",
    icon: School,
  },
  {
    label: "HX",
    value: "HX",
    icon: CircleDashed,
  },
  {
    label: "IceCream",
    value: "Medicines",
    icon: IceCream,
  },
  {
    label: "NewsPaper",
    value: "NewsPaper",
    icon: Newspaper,
  },
  {
    label: "OutSidePurchase",
    value: "OutSidePurchase",
    icon: ShoppingCart,
  },
  {
    label: "SSSHSS",
    value: "SSSHSS",
    icon: School,
  },
  {
    label: "Tailor",
    value: "Tailor",
    icon: Shirt,
  },
  {
    label: "TelePhone",
    value: "TelePhone",
    icon: Phone,
  },
  {
    label: "Trip",
    value: "Trip",
    icon: Bus,
  },
  {
    label: "TS",
    value: "TS",
    icon: CircleDashed,
  },
  {
    label: "Watchrepair",
    value: "Watchrepair",
    icon: Watch,
  },
  {
    label: "Xerox",
    value: "Xerox",
    icon: Printer,
  },
  {
    label: "Transfer",
    value: "Transfer",
    icon: Send,
  },
  {
    label: "SportsGoods",
    value: "SportsGoods",
    icon: Dumbbell,
  },
  {
    label: "Others",
    value: "Others",
    icon: GripHorizontal,
  },
  {
    label: "Haircut",
    value: "Haircut",
    icon: Scissors,
  },
  {
    label: "Spects",
    value: "Spects",
    icon: Glasses,
  },
]

// export const type = [
//   {
//     label: "",
//     value: "",
//     icon: </>
//   }
// ]

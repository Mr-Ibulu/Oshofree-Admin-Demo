import TableImage from "@/components/table/TableImage";
import RowTitle from "@/components/table/RowTitle";
import { findCategory } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MdManageAccounts, MdModeEditOutline, MdOutlineModeEditOutline } from "react-icons/md";
import Link from "next/link";
import numeral from "numeral";

export const serviceColumns = [
  {
    field: "actions",
    headerName: "Manage",
    width: 100,
    renderCell: ({ row }) => (
      <Link href={`/services/${row.id}`} className="rounded-full p-2 hover:bg-zinc-200 dark:hover:bg-zinc-900">
        <MdManageAccounts className="text-xl text-zinc-600 dark:text-zinc-400" />
      </Link>
    ),
  },
  {
    field: "id",
    headerName: "ID",
    width: 100,
  },
  {
    field: "image",
    sortable: false,
    headerName: "Image",
    minWidth: 100,
    renderCell: ({ row }) => <TableImage row={row} />,
  },
  {
    field: "title",
    headerName: "Name",
    minWidth: 250,
    renderCell: ({ row }) => <RowTitle title={row.title} />,
  },
  {
    field: "prevPrice",
    type: "number",
    headerName: "Original Price",
    width: 160,
    valueFormatter: ({ value }) => `\u20A6 ${value.toFixed(2)}`,
  },
  {
    field: "newPrice",
    type: "number",
    headerName: "Discounted Price",
    width: 160,
    valueFormatter: ({ value }) => `\u20A6 ${value.toFixed(2)}`,
  },
  {
    field: "discount",
    headerName: "Discount",
    width: 120,
    valueGetter: ({ row }) => ((row.newPrice - row.prevPrice) / row.prevPrice) * 100,
    valueFormatter: ({ value }) => `${Math.round(value).toLocaleString()}%`,
  },
  {
    field: "available",
    headerName: "Available",
    width: 120,
    type: "boolean",
    renderCell: ({ row }) =>
      row.available ? (
        <Badge className="bg-green-600 dark:bg-green-600 dark:text-white">Available</Badge>
      ) : (
        <Badge variant="destructive">Expired</Badge>
      ),
  },
  {
    field: "vendorId",
    headerName: "Vendor ID",
    width: 100,
  },
  {
    field: "createdOn",
    type: "date",
    headerName: "Date Created",
    minWidth: 120,
  },
  {
    field: "updatedOn",
    type: "date",
    headerName: "Date Modified",
    minWidth: 120,
  },
  {
    field: "expiry",
    type: "date",
    headerName: "Expiry",
    minWidth: 120,
  },
  {
    field: "completedSales",
    headerName: "Total Sales",
    width: 160,
    valueFormatter: ({ value }) => numeral(value).format("0.0a"),
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 100,
  },
  {
    field: "categories",
    headerName: "Categories",
    minWidth: 250,
    valueFormatter: ({ value }) => value.map((slug) => findCategory(slug).title),
  },
];

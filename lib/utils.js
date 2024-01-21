import { categories } from "@/data/categories";
import { customers } from "@/data/customers";
import { orders } from "@/data/orders";
import { payouts } from "@/data/payouts";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { skilledWorkers } from "@/data/skilledWorkers";
import { vendors } from "@/data/vendors";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const findAllDescendantCategory = (ancestorCategory, descendantCategories = []) => {
  const filteredCategories = categories.filter((cat) => cat.parent === ancestorCategory.slug);
  for (const result of filteredCategories) {
    descendantCategories.push(result);
    findAllDescendantCategory(result, descendantCategories);
  }
  return descendantCategories;
};

export const findParent = (childCategory) => {
  return categories.find((parent) => parent.slug === childCategory.parent);
};

export const findAllRootCategories = () => {
  return categories.filter((cat) => !cat.parent);
};

export const findCategory = (slug) => {
  return categories.find((cat) => cat.slug === slug);
};

export const findProduct = (id) => {
  return products.find((deal) => deal.id == id);
};

export const findService = (id) => {
  return services.find((deal) => deal.id == id);
};

export const findVendor = (id) => {
  return vendors.find((vendor) => vendor.id == id);
};

export const findSkilledWorker = (id) => {
  return skilledWorkers.find((worker) => worker.id == id);
};

export const findCustomer = (id) => {
  return customers.find((customer) => customer.id == id);
};

export const findOrder = (orderId) => {
  return orders.find((order) => order.orderId == orderId);
};

export const findPayoutDatail = (id) => {
  return payouts.find((payoutDetail) => payoutDetail.id == id);
};

export const getTopTenSellingDeals = () => {
  const allDeals = [...products, ...services];
  const sortedBySales = allDeals.sort((a, b) => {
    if (a.completedSales < b.completedSales) {
      return 1;
    }
    if (a.completedSales > b.completedSales) {
      return -1;
    }
    return 0;
  });

  return sortedBySales.slice(0, 10);
};

export const getRecentOrders = () => {
  const recent = [...orders].sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  });

  return recent.slice(0, 4);
};

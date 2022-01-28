<template>
  <div>
    <div class="px-10 py-5">
      <div class="bg-blue-900 text-white text-lg px-3">
        Your Contact Information
      </div>
      <table class="table-auto border-collapse min-w-full">
        <thead class="bg-gray-50">
          <tr>
            <td
              style="width: 20%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Mobile Phone
            </td>
            <td
              style="width: 80%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.personalInfo.mobilePhone }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              E-Mail
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.personalInfo.personalMail }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              University E-Mail
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.email }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <div class="px-10 py-5">
      <div class="bg-blue-900 text-white text-lg px-3">Official Address</div>
      <table class="table-auto border-collapse min-w-full">
        <thead class="bg-gray-50">
          <tr>
            <td
              style="width: 20%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Address
            </td>
            <td
              style="width: 80%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.address }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              City
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.province }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              District
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.district }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Village/District
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.village }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Postal Code
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.postalCode }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Phone (Home)
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.place.homePhone }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <div class="px-10 py-5">
      <div class="bg-blue-900 text-white text-lg px-3">
        Person to Call in Emergency
      </div>
      <table class="table-auto border-collapse min-w-full">
        <thead class="bg-gray-50">
          <tr>
            <td
              style="width: 20%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Name & Surname
            </td>
            <td
              style="width: 80%"
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.emergency.name }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Address
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.emergency.address }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Phone 1
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.emergency.phone1 }}
            </td>
          </tr>
          <tr>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              Phone 2
            </td>
            <td
              class="py-4 border border-slate-300 px-6 font-medium whitespace-nowrap"
            >
              {{ data.emergency.phone2 }}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddressView",
  props: {
    data: { type: Object, required: true },
  },

  setup() {
    return {};
  },
};
</script>

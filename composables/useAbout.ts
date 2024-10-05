interface AboutItem {
    id: number;
    title: string;
  }
  export default function useAbout() {
    const aboutItems = ref<AboutItem[]>([]);
  
    const fetchAboutItems = async () => {
      const { data } = await useApi(`about/list?lang=vi`);
      aboutItems.value = data as AboutItem[];
    };
  
    fetchAboutItems();
  
    return {
      aboutItems,
    };
  }
  
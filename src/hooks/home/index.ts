import { computed, onMounted } from 'vue';

import { useApiProvider } from '@/providers/api';
import { Option } from '@/types';
import { Amiibo } from '@/types/amiibo';
import { mapAmiibosOptions } from '@/services/amiibo/mappers';
import { useRef } from '@/utils/hooks';

export function useHomeController() {
  const { amiibo } = useApiProvider();

  const [search, setSearch] = useRef<string>('');
  const [loading, setLoading] = useRef<boolean>(false);
  const [amiiboList, setAmiiboList] = useRef<Option<Amiibo>[] | undefined>([]);

  async function fetchAmiibos(search?: string) {
    setLoading(true);
    return amiibo
      .getAmiibos({ name: search })
      .then(mapAmiibosOptions())
      .then(setAmiiboList)
      .finally(() => setLoading(false));
  }

  function handleSearch(v: string) {
    setSearch(v);
    fetchAmiibos(v);
  }

  onMounted(() => {
    fetchAmiibos();
  });

  return { amiiboList, search, handleSearch, loading };
}

export const useAppStore = defineStore('app', () => {
  // #region : Loading
  const loadingCount = ref(0)
  const isLoading = computed((): boolean => loadingCount.value > 0)
  function setLoading(status: boolean = true, debugMsg?: string) {
    loadingCount.value = status ? loadingCount.value + 1 : Math.max(0, loadingCount.value - 1)
  }
  // #endregion

  return {
    loadingCount,
    isLoading,
    setLoading,
  }
})

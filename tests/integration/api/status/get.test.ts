import apiBaseUrl from "@/util/apiBaseUrlAxios";

test("GET /api/status", async () => {
  const response = await apiBaseUrl.get("/api/status");
  expect(response.status).toBe(200);
});

const BASE_URL = "https://charitiy.banglatechsolutionit.com/api";


const normalizeData = (res) => {
  if (res?.data?.data) return res.data.data;
  if (res?.data) return res.data;
  return res;
};


const handleError = async (res) => {
  let message = "Something went wrong";

  try {
    const errorData = await res.json();
    message = errorData?.message || message;
  } catch (e) {
     console.error("Error parsing error response:", e);
  }

  throw new Error(message);
};


export const fetchData = async (endpoint, options = {}) => {
  const { method = "GET", body, headers = {}, raw = false } = options;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    await handleError(res);
  }

  const json = await res.json();

  return raw ? json : normalizeData(json);
};

export const getHeroData = () => fetchData("/hero-section-data")
export const getCauses = () => fetchData("/cause-data");
export const getImpactStories = () => fetchData("/impact-story-data");
export const getActivityDistributionData = () => fetchData("/activity-distribution-data");
export const getRealImpactData = () => fetchData("/real-impact-data");
export const getBlogPosts = () => fetchData("/blog-data");
export const getStoryData = () => fetchData("/real-stories-data");
export const getCallToAction = () => fetchData("/home-cta-data");
export const getAboutHeroData = () => fetchData("/about-hero-data");
export const getAboutMissionVision = () => fetchData("/mission-vision-data");
export const getCOREVALUES = () => fetchData("/core-values-data");
export const getTimeLine = () => fetchData("/timelines-data");
export const getLeaderShip = () => fetchData("/leaderships-data");
export const getBlogHeroData = () => fetchData("/blog-hero-data");
export const getBlogCtaData = () => fetchData("/blog-cta-data");
export const getcontactInfoData = () => fetchData("/contact-info-data");



//post request for contact form

export const submitContactForm = async (formData) => {
  const response = await fetch(`${BASE_URL}/store-contact`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};


export const FCS = {
  endpoint: 'https://api.freecurrencyapi.com/v1/latest',
  apikey: '6PdYjQ0JVcaP7iz7GRmKSOjroUCg7USFcFbD7BQp',
};

export interface FCSResponse {
  data: Record<string, number>;
  status: string;
}

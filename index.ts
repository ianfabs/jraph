const jraph = (url: string, options: any) => {
  return async (args: string[], ...vals: any[]): Promise<any> => {
    const request = await fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({query: args.reduce((a, v, i) => a + v + vals[i]).replace(/([\\][n])?([\s])+/g, " "),}),
      ...options,
    });
    try {
      return request.json();
    } catch (error) {
      return {
        request: await request.text(),
        error,
      };
    }
  };
}

export { jraph };
import Axios, { AxiosInstance } from 'axios';
import { ApiEndpoints } from 'constants/ApiEndpoints';
import { MediaType } from 'constants/MediaType';
import { ExampleModel, ReqUpdateData } from './example.types';

/**
 * Code that involves connecting to external API
 * must be put inside a service class. You may also put complex business
 * logics here.
 */
export class ExampleService {
  private static api: AxiosInstance = Axios.create();

  /**
   * Get list of sample data
   */
  static async getSampleData() {
    const response = await this.api.get<ExampleModel[]>(ApiEndpoints.SAMPLE_DATA);
    return response.data;
  }

  /**
   * Update a sample data
   * @param id Sample data id
   * @param name Sample data name
   * @param age Sample data age
   */
  static async editData(id: string, name: string, age: string) {
    const reqBody: ReqUpdateData = { name, age };

    const response = await this.api.put<ExampleModel>(ApiEndpoints.SAMPLE_DATA_BY_ID(id), JSON.stringify(reqBody), {
      headers: { 'Content-Type': MediaType.APPLICATION_JSON }
    });

    return response.data;
  }
}

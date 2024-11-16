import AsyncStorage from '@react-native-async-storage/async-storage';

export class Storage {
  /**
   *添加数据
   * @param {string} key
   * @param {mixed} value
   * @returns {Promise}
   */
  static async setItem(key: string, value: string): Promise<void> {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  /**
   *
   * @param {string} key
   * @returns {Promise}
   */
  static async getItem(key: string): Promise<string | null> {
    return AsyncStorage.getItem(key)
      .then(value => {
        if (value !== null) {
          return JSON.parse(value);
        }
      })
      .catch(() => {});
  }
  /**
   *更新数据
   */
  static async updateItem(key: string, updatedValue: string): Promise<void> {
    return AsyncStorage.getItem(key).then(existingValue => {
      updatedValue =
        typeof this.updateItem === 'string'
          ? updatedValue
          : Object.assign({}, existingValue, updatedValue);
      return AsyncStorage.setItem(key, JSON.stringify(updatedValue));
    });
  }

  /**
   * 删除数据
   * @param {string} key
   * @returns {Promise}
   */
  static async removeItem(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  /**
   * 清空所有数据
   * @returns {Promise}
   */
  static async clear(): Promise<void> {
    return AsyncStorage.clear();
  }
}

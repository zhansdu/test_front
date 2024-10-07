import { alert, confirm } from "../services/AlertService";
import type { ErrorResponseMessage } from "../types/response";

export function generateResponseMessage(data:ErrorResponseMessage){
  let message = "";
  message+=`
  <div>
    ${data.message ?? "Success"}
  </div>
  `;

  const table = 
  `
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>
          Note
        </th>
      <tr>
    </thead>
    <tbody>
  `;
  const table_end =
  `
    </tbody>
  </table>
  `;
  if(data.errors && data.errors?.length>0){
    message+=
    `
    <div>
      Errors
    </div>
    `;

    message+=table;

    data.errors.forEach((error,index)=>{
      message+=`
      <tr>
        <td>
          ${index+1}
        </td>
        <td>
          ${error}
        </td>
      </tr>
      `;
    });

    message+= table_end;
  }

  if(data.warnings && data.warnings?.length>0){
    message+=
    `
    <div>
      Warnings
    </div>
    `;

    message+=table;

    data.warnings.forEach((warning,index)=>{
      message+=`
      <tr>
        <td>
          ${index+1}
        </td>
        <td>
          ${warning}
        </td>
      </tr>
      `;
    });

    message+= table_end;
  }

  if(data.message && data.message.length>0 || data.errors && data.errors.length>0 || data.warnings && data.warnings.length>0)
    confirm(message,"xl");
  else
    alert("Success");
}
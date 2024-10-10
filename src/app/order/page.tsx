import { getFormattedDate, names, names1, names2 } from '@/app/lib/utils';

export default function Page() {
  const order = {
    id: 45,
    title: 'Order',
    author: 'Kyrylo Budanov',
    date: getFormattedDate(),
    enterprise: 'Apple Enterprice',
    object: 'ABC123',
    accession: 'LK2',
    orderText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quidem obcaecati optio itaque quisquam, numquam corporis laboriosam praesentium quaerat quas dolore necessitatibus ipsa blanditiis corrupti libero reiciendis aliquam, culpa nostrum?',
    acquaintedShould: names,
    acquaintedActive: names1,
    acquaintedDeclined: names2,
    status: 'Active',
  };

  return (
    <div className='flex flex-col'>
      <div className='flex flex-col space-y-3 rounded-md bg-gray-900 p-4'>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>Order</h2>
          <p className='font-mono text-gray-400'>
            {order.title} #{order.id}
          </p>
        </div>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>Author</h2>
          <p className='font-mono text-gray-400'>{order.author}</p>
        </div>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>Date</h2>
          <p className='font-mono text-gray-400'>{order.date}</p>
        </div>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>Enterprise</h2>
          <p className='font-mono text-gray-400'>{order.enterprise}</p>
        </div>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>Object</h2>
          <p className='font-mono text-gray-400'>{order.object}</p>
        </div>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>Accession</h2>
          <p className='font-mono text-gray-400'>{order.accession}</p>
        </div>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>Text</h2>
          <p className='font-mono text-gray-400'>{order.orderText}</p>
        </div>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>
            Should get acquainted
          </h2>
          <p className='flex flex-row space-x-2 font-mono text-gray-400'>
            {order.acquaintedShould.map((name) => (
              <span
                key={name}
                className='rounded-md bg-orange-900 px-2 py-1 font-semibold text-white'
              >
                {name}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>Acquainted</h2>
          <p className='flex flex-row space-x-2 font-mono text-gray-400'>
            {order.acquaintedActive.map((name) => (
              <span
                key={name}
                className='rounded-md bg-green-900 px-2 py-1 font-semibold text-white'
              >
                {name}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>
            Acquainted with decline
          </h2>
          <p className='flex flex-row space-x-2 font-mono text-gray-400'>
            {order.acquaintedDeclined.map((name) => (
              <span
                key={name}
                className='rounded-md bg-red-900 px-2 py-1 font-semibold text-white'
              >
                {name}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h2 className='text-xl font-extrabold text-gray-300'>Status</h2>
          <p className='font-mono text-gray-400'>{order.status}</p>
        </div>
      </div>
    </div>
  );
}

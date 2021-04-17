using System;
using System.Collections.Generic;
using System.Web.Http.Dependencies;
using Ninject;
using Ninject.Extensions.ChildKernel;
using EmployeeDirectory.Contracts;
using EmployeeDirectory.Services;

namespace EmployeeDirectory
{
    public class NinjectResolver : IDependencyResolver
    {
        private IKernel kernel;

        public NinjectResolver() : this(new StandardKernel())
        {
        }

        public NinjectResolver(IKernel ninjectKernel, bool scope = false)
        {
            kernel = ninjectKernel;
            if (!scope)
            {
                AddBindings(kernel);
            }
        }

        public IDependencyScope BeginScope()
        {
            return new NinjectResolver(AddRequestBindings(new ChildKernel(kernel)), true);
        }

        public object GetService(Type serviceType)
        {
            return kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return kernel.GetAll(serviceType);
        }

        public void Dispose()
        {

        }

        private void AddBindings(IKernel kernel)
        {
            // singleton and transient bindings go here
        }

        private IKernel AddRequestBindings(IKernel kernel)
        {
            kernel.Bind<IEmployeeServices>().To<EmployeeServices>().InSingletonScope();
            kernel.Bind<IDepartmentServices>().To<DepartmentServices>().InSingletonScope();
            kernel.Bind<IDesignationServices>().To<DesignationServices>().InSingletonScope();
            kernel.Bind<IOfficeServices>().To<OfficeServices>().InSingletonScope();
            return kernel;
        }
    }
}
